export function TodoList() {
  const arr = [
    {
      name: 'A',
      age: 1
    },
    {
      name: 'ABC',
      age: 19
    },
  ];

  // const list = arr.map(item => {
  //   console.log(item);
  //   return (
  //     <h3 ker={item.age}>
  //       {item.name} -- {item.age}
  //     </h3>
  //   )
  // })

  const list = arr.map(item =>
    <h3 ker={item.age}>
      {item.name} -- {item.age}
    </h3>
  )

  // console.log(list);
  return (
    <div>
      123
      {list}
    </div>
  )
}