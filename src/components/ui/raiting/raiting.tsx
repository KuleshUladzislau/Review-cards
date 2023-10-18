import ReactStars from 'react-stars'

type Props = {
  grade: number
}
export const Raiting = ({ grade }: Props) => {
  return <ReactStars size={30} value={grade} half={false} onChange={() => {}} edit={false} />
}
