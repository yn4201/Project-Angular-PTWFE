
const express = require('express')
const app = express()
const cors  = require('cors');
const port = 3500
	var corsOptions = {
	  origin: 'http://localhost:4200',
	  //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
	  //giả sử node server là http://localhost:8000
	  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
	};
app.use(cors(corsOptions));
app.use(express.json())

app.listen(3500, () => {
  console.log('Server started!');
  });

var itemList = [
	{id:"0",name:'Nước hoa Dior Blooming Bouquet EDT 50ml',brand: 'DIOR',origin:'Pháp',money:'1.950.000 đ',status:"Còn Hàng"},
   	{id:"1",name:'Nước Hoa Maison Margiela Replica Jazz Club EDT 100ml',brand: 'MAISON MARTIN MARGIELA',origin:'Pháp',money:'2.490.000 đ',status:"Hết Hàng"},
   	{id:"2",name:'Nước Hoa Nam Chanel Bleu De Chanel EDP 100ml',brand: 'CHANEL',origin:'Pháp',money:'3.250.000 đ',status:"Hết Hàng"},
   	{id:"3",name:'Nước Hoa Nữ Kilian Love EDP 50ml',brand: 'KILIAN',origin:'Pháp',money:'4.450.000 đ',status:"Còn Hàng"},
   	{id:"4",name:'Nước Hoa Nam Christian Dior Sauvage EDP Đậm Chất Hiện Đại 100ml',brand: 'DIOR',origin:'Pháp',money:'2.980.000 đ',status:"Còn Hàng"},
] 


// Product

app.get('/api/item', (req, res) => {
	try {
		res.status(201).send(itemList)
	} catch (error) {
		res.status(201).send(error)
	}
});

app.get('/api/item/:id', (req, res) => {

	const {id} = req.params;
	const index = itemList.findIndex((item => item.id == id))

	if(index != -1){
		res.status(200).send(itemList[index])
	}else{
		res.status(404).send('Not Found')
	}
});

app.delete('/api/item/:id', (req, res) => {
	const {id} = req.params;
	
	const index = itemList.findIndex((item => item.id == id))

	if(index != -1){
		itemList.splice(index, 1);
		res.status(200).send(itemList[index])
	}else{
		res.status(404).send('Not Found')
	}

})

app.post('/api/item', (req, res) => {

	const {id, name , brand, origin, money, status} = req.body;

	try {
		const newItem = {id, name , brand, origin, money, status};
		itemList.push(newItem);
		res.status(201).send(newItem)
	} catch (error) {
		res.status(404).send(error)
	}
	
})


app.put('/api/item/:id', (req, res) => {
	
	const {id, name , brand, origin, money, status} = req.body;

	const index = itemList.findIndex((item => item.id == id))

	const updateItem = {id, name , brand, origin, money, status};

	if(index != -1){
		itemList[index] = {...updateItem}
		res.status(200).send(itemList[index])
	}else{
		res.status(404).send('Not Found')
	}

})