import NextImage, { ImageProps } from 'next/image'

const Image: React.FC<ImageProps> = ({ alt = '', ...props }) => {
  if (props.src.toString().includes('http')) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...props}></img>
  }
  return <NextImage alt={alt} {...props}></NextImage>
}

export default Image
