import Image from "next/image"

const ImageComponent = ({ children, src, width, height, alt, unoptimized, ...rest }) => {
  const widthProps = width || 10
  const heightProps = height || 10
  const srcProps = src || ""
  return (
    <>
      <Image
        loading={undefined}
        unoptimized={true}
        alt={alt}
        width={widthProps}
        height={heightProps}
        src={srcProps}
      >
        {children}
      </Image>
    </>
  )
}

export default ImageComponent
