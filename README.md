# ClubHouse Podcast App
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






### Errors Occured During the Project

#### There are some common error because of Deprecation and  updates in `react-router-dom`

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

