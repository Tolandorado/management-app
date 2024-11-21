import React from 'react'
import Header from '../../components/Header';

type Props = {}

const Settings = (props: Props) => {
    const userSettings = {
       username: "johnnoe",
       email: "forexample@mail.com",
       teamName: "Dev TEAM",
       roleName: "DevOps"
    }
    const labelStyles = "block text-sm font-medium dark:text-white";
    const textStyles = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";
  return (
    <div className='p-8'>
        <Header name='Settings' />
        <div className='space-y-4'>
            <div>
                <label className={labelStyles}>Username</label>
                <div className={textStyles}>{userSettings.username}</div>
            </div>
            <div>
                <label className={labelStyles}>email</label>
                <div className={textStyles}>{userSettings.email}</div>
            </div>
            <div>
                <label className={labelStyles}>Team name</label>
                <div className={textStyles}>{userSettings.teamName}</div>
            </div>
            <div>
                <label className={labelStyles}>Role name</label>
                <div className={textStyles}>{userSettings.roleName}</div>
            </div>
        </div>
    </div>
  )
}

export default Settings