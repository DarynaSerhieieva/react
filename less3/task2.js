/*

Задание 2:

Написать кастомный элемент инпута.
У компонента нужно сделать возможность настраивать:
- type
- placeholder
- value
- onChangeHandler
- name
- contentLength ( свойство которое показывает счетчик сколько символов набрано в инпут)
- contentMaxLength ( Максимальное кол-во символов )

Результатом будет компонент,
	<label>
		<div>{name}</div>
	
		<input
		type={type}
		placeholder={placeholder}
		value={value}
		onChange={handler}
		/>
	</label>

	PropTypes:
		type: Одно из значений: text, password, number, required
		placeholder: строка
		value: строка или любой
		handler: function, required
		contentLength: bool
		contentMaxLength: number
*/
