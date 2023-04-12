
   const getData = async (url) => {
        console.log(url);
        try {
          const response = await fetch(url);
          const data = await response.json();
          //console.log(data);
          return data;
        } catch (error) {
          console.error(error);
        }
      };

  
  export default getData;