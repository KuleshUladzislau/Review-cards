import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textfield } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

export const CreateNewPassword = () => {
  return (
    <Card>
      <Typography variant={'h1'}>Create new password</Typography>
      <Textfield label={'Password'} type={'password'}></Textfield>
      <Typography variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '41px',
          width: '80%',
        }}
      >
        <Button onClick={() => {}} fullWidth={true} style={{ marginBottom: '60px' }}>
          Create New Password
        </Button>
      </div>
    </Card>
  )
}
