export type ImageProps = {
    srcImg: string
    alt: string
    width: number
    height: number
    role: string
}

const Image = ({ srcImg, alt, width, height, role }: ImageProps) => {
    return <img src={srcImg} alt={alt} width={width} height={height} role={role} />
}

export default Image