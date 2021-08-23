import { Button } from '@chakra-ui/react'

const SideBar = () => {
  const lists = ['Home', 'about']
  return (
    <aside>
      <ul>
        {lists.map((list) => {
          return <li>{list}</li>
        })}
      </ul>
      <Button colorScheme='blue'>ボタン</Button>
    </aside>
  )
}

export default SideBar
