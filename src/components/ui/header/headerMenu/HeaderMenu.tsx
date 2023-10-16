import { useNavigate } from 'react-router-dom'

import s from './headerMenu.module.scss'

import { Logout, Profile } from '@/assets'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { CustomDropdown, CustomDropdownItem } from '@/components/ui/dropdown'
import { HeaderProps } from '@/components/ui/header/header.tsx'
import { Typography } from '@/components/ui/typography'

type HeaderMenuProps = Omit<HeaderProps, 'isLoggedIn'>
export const HeaderMenu = ({ userName, email, userPhoto, logout }: HeaderMenuProps) => {
  const navigate = useNavigate()
  const navigateToProfile = () => {
    navigate('/profile')
  }

  return (
    <CustomDropdown
      trigger={<Avatar src={userPhoto} userName={userName} />}
      className={s.dropDown}
      align={'start'}
    >
      <CustomDropdownItem className={s.itemUserInfo}>
        {userPhoto && <img src={userPhoto} className={s.photo} />}
        {!userPhoto && <span className={s.dontHaveAvatar}>{userName?.[0]}</span>}
        <div className={s.userInfoContainer}>
          <Typography variant={'subtitle1'} as={'span'} className={s.userName}>
            {userName}
          </Typography>
          <Typography variant={'caption'} as={'span'} className={s.email}>
            {email}
          </Typography>
        </div>
      </CustomDropdownItem>
      <CustomDropdownItem onClick={navigateToProfile}>
        <Profile /> My profile
      </CustomDropdownItem>
      <CustomDropdownItem onClick={logout}>
        <Logout />
        Sign Out
      </CustomDropdownItem>
    </CustomDropdown>
  )
}
