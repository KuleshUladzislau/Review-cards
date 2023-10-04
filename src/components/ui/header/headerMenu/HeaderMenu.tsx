import s from './headerMenu.module.scss'

import { Logout, Profile } from '@/assets'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { CustomDropdown, CustomDropdownItem } from '@/components/ui/dropdown'
import { HeaderProps } from '@/components/ui/header/header.tsx'
import { Typography } from '@/components/ui/typography'

type HeaderMenuProps = Omit<HeaderProps, 'isLoggedIn'>
export const HeaderMenu = ({ userName, email, userPhoto }: HeaderMenuProps) => {
  return (
    <CustomDropdown
      trigger={<Avatar src={userPhoto} userName={userName} />}
      className={s.dropDown}
      align={'end'}
    >
      <CustomDropdownItem className={s.itemUserInfo}>
        <img src={userPhoto} className={s.photo} />
        <div className={s.userInfoContainer}>
          <Typography variant={'subtitle1'} as={'span'} className={s.userName}>
            {userName}
          </Typography>
          <Typography variant={'caption'} as={'span'} className={s.email}>
            {email}
          </Typography>
        </div>
      </CustomDropdownItem>
      <CustomDropdownItem>
        <Profile /> My profile
      </CustomDropdownItem>
      <CustomDropdownItem>
        <Logout />
        Sign Out
      </CustomDropdownItem>
    </CustomDropdown>
  )
}
