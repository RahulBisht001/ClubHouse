# <img src="https://github.com/RahulBisht001/ClubHouse/blob/main/microphone.png" alt="" width="60" height="50"> ClubHouse Podcast App
____________________________


### Learnings from the Projects

* importance of .module.css



* Syntax

    Adding css from .module.css:
    here container class is global class while styles is
    imported from Navigation.module.css and to add the css from
    this module we need to Write this kind of syntax

```javascript
className={`${styles.navbar} container`} 
```

______________________________________________________________
* crypto:

It is build it node module which has a lot of methods like randomInt , randomBytes, createHmac etc

* Learning about Classes 
Syntax : 

```javascript
class HashService {
    hashOtp(data) {
        // code
    }
}
```

we don't need to add the function keyword in the method. simply write the name of method and logic

* we have user `.env` file heavily.

* Authentication 

* How to Make Serer Request from Client

1. we can user Fetch API method
2. But in this Project we Use `Axios` from this purpose.

#### Axios

axios is kind of updated version of Fetch API method in JS but not in reality.
e.g :  simple GET request with axios

```javascript
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
```


###### Popularity Reasons

`Axios has a simpler API`  -:

Axios provides a simpler and more intuitive API compared to the Fetch API. With Axios, 
you can make HTTP requests with just a few lines of code, whereas with the Fetch API,
the syntax can be more complex and verbose.

` Built in Error handler` -:

Axios automatically handles errors that occur during the request, making it easier to handleerrors in your code. It is not available with Fetch API.
  
`Axios supports request cancellation` -:
  
With Axios, you can easily cancel a request by using a cancel token. This is useful when you needto cancel a request that is no longer needed, such as when a user navigates away from a page.

`Axios supports interceptors` -:

Axios supports interceptors, which allow you to intercept and modify requests and responses. Thisis useful for adding headers to requests, handling authentication, and more.

 
__ How to use `axios` library
1. make the instance of `axios`



### Errors Occured During the Project

#####  There are some common error because of Deprecation and  updates in
 `react-router-dom`

Resource : StackOverFlow


* `Attempted import error: 'Switch' is not exported from 'react-router-dom'`

Solution : https://tinyl.io/8FsQ

In react-router-dom v6, "Switch" is replaced by routes "Routes". 
You need to update the import

from 

``` javascript
import { Switch, Route } from "react-router-dom";
```

To 
```javascript
 import { Routes ,Route } from 'react-router-dom';
  ```

You also need to update the Route declaration 
from
```javascript
<Route path="/" component={Home} />
```
to
```javascript
<Route path='/' element={<Home/>} />
```




*  `Attempted import error: 'useHistory' is not exported from 'react-router-dom'`
Solution : https://tinyl.io/8GCH

In react-router-dom v6 useHistory() is replaced by useNavigate().
```
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/home');
```

