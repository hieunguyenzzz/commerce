import NextImage, { ImageProps } from 'next/image'

const Image: React.FC<ImageProps> = ({ alt = '', ...props }) => {
  if (typeof props.src === 'string' && props.src.includes('http')) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...props} src={props.src}></img>
  }
  return <NextImage alt={alt} {...props}></NextImage>
}

export default Image
