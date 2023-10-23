import { forwardRef, memo, Ref, SVGProps } from 'react'
type Props = {
  className?: string
}
const Loader = (props: SVGProps<SVGSVGElement> | Props, ref: Ref<SVGSVGElement>) => {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        ref={ref}
        {...props}
      >
        <g clipPath="url(#clip0_107_37)">
          <path
            d="M19 37.5C28.9411 37.5 37 29.4411 37 19.5C37 9.55887 28.9411 1.5 19 1.5C9.05887 1.5 1 9.55887 1 19.5C1 29.4411 9.05887 37.5 19 37.5Z"
            stroke={'white'}
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path d="M37 19.5C37 9.56 28.94 1.5 19 1.5" stroke={'white'} strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_107_37">
            <rect width="50" height="50" fill={'white'} transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
const ForwardRef = forwardRef(Loader)

export default memo(ForwardRef)
