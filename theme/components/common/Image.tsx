import NextImage, { ImageProps } from 'next/image'

const Image: React.FC<ImageProps> = ({ alt = '', ...props }) => {
  return <NextImage alt={alt} {...props}></NextImage>
}

export default Image
