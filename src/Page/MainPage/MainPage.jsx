import { Banner, NewsBlock, Search, OtherBlock, OtherBlockContent } from "../../components"

export const MainPage = () => {
  return (
    <>
      <NewsBlock />
      <Search />
      <Banner urlBanner={'https://netology.ru/'} urlImage={'https://avatars.mds.yandex.net/i?id=35a099905c6cc4eb56322ddf1d40f68b379994a4-8356382-images-thumbs&n=13'} />
      <OtherBlock>
        <OtherBlockContent title={'Погода'}>

        </OtherBlockContent>
        <OtherBlockContent title={'Карта Германии'}>

        </OtherBlockContent>
        <OtherBlockContent title={'Посещаемое'}>

        </OtherBlockContent>
        <OtherBlockContent title={'Телепрограмма'}>

        </OtherBlockContent>
        <OtherBlockContent title={'Эфир'}>

        </OtherBlockContent>

      </OtherBlock>
    </>
  )
}
