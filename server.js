import express from 'express';
const app = express();

app.get('/', (req,res)=>{
  res.status(200).json({200: 'pass'});
});

app.listen(process.env.PORT||8000, ()=>{
  console.log('OK');
});
