import { MAX_FILE_SIZE } from '@/constants/index'
import { useUser } from '@/hooks/user/useUser'
import useUpdateBanner from '@/hooks/useUpdateBanner'
import React, { useState } from 'react'
import FilledButton from '../ui/Buttons/Filled'
import OutlinedButton from '../ui/Buttons/Outlined'
import Line from '../ui/Line'

interface InitialState {
  name: string
  description: string
  image: string | ArrayBuffer | null
}

function Banner() {
  const { data: currentUser } = useUser()
  const updateBanner = useUpdateBanner()

  const initialState: InitialState = {
    name: '',
    description: '',
    image: '',
  }

  const [banner, setBanner] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleBannerUpdate()
  }

  const handleBannerUpdate = async () => {
    if (!currentUser) return
    try {
      await updateBanner(banner.name, banner.description, banner.image)
      //   console.log(banner.name, banner.description, banner.image)
    } catch (error) {
      alert('not updated')
    }
  }
  const handleNameInputChange = (e) => {
    setBanner({ ...banner, name: e.target.value })
  }

  const handleDescriptionInputChange = (e) => {
    setBanner({ ...banner, description: e.target.value })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      console.log(selectedFile, 'clicked')

      if (!selectedFile) return

      if (selectedFile.size > MAX_FILE_SIZE) {
        // setToast('error', 'Photo must be less than 1mb')
        alert('message')
        return
      }

      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
      ) {
        alert('message in')
        // setToast('error', 'Invalid file type')
        return
      }
      imageChange(selectedFile)
    } else {
      return
    }
  }

  const imageChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setBanner({ ...banner, image: reader.result })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="m-4  rounded">
      <h4 className="p-4 font-bold text-4xl">Banner Setting</h4>
      <Line />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        <label className="text-lg font-semibold">Name</label>
        <input
          name="name"
          className="h-10 focus:border-0 p-2 rounded"
          placeholder="name"
          onChange={handleNameInputChange}
        />

        <label className="text-lg font-semibold">Description</label>
        <textarea
          name="description"
          className="h-20 focus:border-0 p-2 rounded  break-all	"
          placeholder="description"
          onChange={handleDescriptionInputChange}
        />
        <div className="relative">
          <input
            type="file"
            className="opacity-0 absolute w-auto h-full "
            onChange={handleChange}
            accept="image/x-png,image/jpeg"
          />
          <OutlinedButton text="Change Photo" />
        </div>
      </form>
      <div className="p-4">
        <FilledButton text="Update" onClick={handleBannerUpdate} />
      </div>
    </div>
  )
}

export default Banner
