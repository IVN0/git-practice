import React, { useState } from 'react'
import './Product.css'

const listItems = ['1', '2', '3']

const Product = () => {
	const [count, setCount] = React.useState(0)
	const [open, setOpen] = React.useState(false)
	const [active, setActive] = React.useState(0)

	const handelActive = index => setActive(index)
	return (
		<>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<button onClick={() => setOpen(open => !open)} style={{ marginLeft: 15 }}>
				{open == true ? 'Закрыть окно' : 'Открыть окно'}
			</button>
			{open && (
				<div style={{ backgroundColor: 'gainsboro', width: 90 }}>
					<h3 style={{ color: 'black' }}>Окно</h3>
				</div>
			)}

			<ul>
				{listItems.map((item, index) => (
					<li
						key={index}
						onClick={() => handelActive(index)}
						className={active == index ? 'red' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	)
}

export default Product
