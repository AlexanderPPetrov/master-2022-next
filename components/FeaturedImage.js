import Image from 'next/image'

function FeaturedImage() {
    return (
        <Image
            className="img-thumbnail"
            layout="responsive"
            src="https://previews.123rf.com/images/piksel/piksel1506/piksel150600089/41508771-familia-feliz-al-aire-libre.jpg"
            alt="Featured image"
            width={795}
            height={554}
      />
    )
}

export default FeaturedImage;


