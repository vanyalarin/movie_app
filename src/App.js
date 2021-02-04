function Food({name}){ 
return (<h3>It`s {name}</h3>);  
}
function App() {
  return (
    <div>
      <h1>HI!!!!!</h1>
      <Food name = "onion"/>
      <Food name = "potatoes"/>
      <Food name = "tomatoes"/>
      <Food name = "garlic"/>
      <Food name = "ginger"/>
      
    </div>
  );
}

export default App;
