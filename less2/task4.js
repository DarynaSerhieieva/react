/*

  Задание 4.

  Table -> 

  Написать Function компоненты для таблицы.
  
  Row -> Который выводит все дочерние элементы которые переданы внутрь
      -> Дополнительно можно передать параметр head="true" который сделает
        эту строку таблички заголовком. По умолчанию false. Должно быть
        прописано в DefaultProps

  Cell-> Компонент который выводит дочерний контент переданный внутрь.
      -> Можно передать параметр сколько ячеек (cells) занимает этот элемент
      -> Можно передать параметры с цветом текста и цветом фона
      -> Можно передать параметр с типом ячейки в зависимости от которого:
        a) type: DATE -> Данные выводятся курсивом
        б) type: NUMBER -> Данные выводятся справа
        в) type: MONEY -> Данные выводятся справа + появляется доп. параметр
          currency=$ который выводится после суммы.
          Если тип money и нету параметра с валютой выводить об этом
          предупреждение в консоль
        г) type: TEXT -> Данные выводятся слева.

  DefaultProps => {
    type: 'text',
    cells: 1
    background: 'transparent',
    color: 'black'
  }


  <Table>
    <Row head="true">
      <Cell background="red">#</Cell>
      <Cell type="date">2</Cell>
      <Cell type="number">3</Cell>
      <Cell type="money" currency="$">4</Cell>
    </Row>
    <Row>
      <Cell type="" background="red">1</Cell>
      <Cell type="date">2</Cell>
      <Cell type="number">3</Cell>
      <Cell type="money" currency="$">4</Cell>
    </Row>
  </Table>
  
*/
