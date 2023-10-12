import { toast } from 'react-toastify'

// export const useResponseWithToast =()=> {
//     return async (request: Promise<any>, messages: {
//         success: string | null,
//         error: string | null,
//         ) =>
//     {
//         const res = await request
//
//         try {
//             if ('data' in res) {
//                 toast.success(messages.success ? messages.success : 'Successful')
//
//                 return {success: true, data: res.data}
//             }
//             else if ( 'error' in res){
//                 toast.error(res.data.message)
//                 return {success:false,error:res.data}
//             }
//         } catch (e) {
//             // @ts-ignore
//             toast.error(messages.error ? messages.error : 'error')
//         }
//     };
// }

export function useResponseWithToast() {
  return async (request: Promise<any>, message?: string) => {
    const res = await request
    console.log(res)
    try {
      if ('data' in res) {
        toast.success('Successful')

        return { success: true, data: res.data }
      } else if ('error' in res) {
        toast.error(message ? message : res.error.data.message)
        return { success: false, error: res.data }
      }
    } catch (e) {
      toast.error('An error occurred')
    }
  }
}

export function useMutationWithToast() {
  return async (mutationResult: Promise<any>, message: string) => {
    try {
      const result = await mutationResult

      if ('data' in result) {
        toast.success(message)

        return { success: true, data: result.data }
      } else if ('error' in result) {
        if (result.error.data && result.error.data.errorMessages) {
          result.error.data.errorMessages.forEach((el: any) => {
            toast.error(el.message)
          })
        } else {
          toast.error('An error occurred')
        }

        return { success: false, error: result.error }
      }
    } catch (error) {
      toast.error('An error occurred')

      return { success: false, error }
    }
  }
}
