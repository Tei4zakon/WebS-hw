const { getSection } = require("../config/configIndex");

const CACHE = {};

const getCharacterName = async (name) => {
    let now = new Date().getTime() / 1000;
    console.log("CACHE", CACHE);

    if (CACHE[name] && 
        now < CACHE[name].timestamp + getSection("characters").cache_expiery
    ) {
        console.log("Data is from cache");
        return CACHE[name];
    };

const URL = `${
    getSection("characters").API_URL}
    /character/?name=${name}`;

try {
    const res = await fetch(URL);
    const data = await res.json();
    CACHE[name] = {
        timestamp: new Date().getTime() / 1000,
        data: data,
      };
  
      return data;
    } catch (err) {
      throw err;
    }
  };

const getCharacterByGender = async (gender) => {
    const URL = `${
        getSection("characters").API_URL}
        /character/?gender=${gender}`;
    
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
        } catch (err) {
          throw err;
        };
      };


      module.exports = {
        getCharacterName,
        getCharacterByGender,
      };