# 1. 路由的基本使用

1. 明确好界面中的导航区、展示区

2. 导航区的`a`标签改为`Link`标签

    `<Link to="/xxxxx">Demo</Link>`

    ```javascript
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    ```

3. 展示区写`Route`标签进行路径的匹配

    `<Route path='/xxxx' component={Demo}/>`

    ```javascript
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    ```

4. `<App>`的最外侧包裹一个`<BrowserRouter>`或`<HashRouter>`

    ```javascript
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
    ```

# 2. 路由组件与一般组件区别

1. 写法不同

    - 一般组件：`<Demo/>`
    - 路由组件：`<Route path="/demo" component={Demo}/>`

2. 存放位置不同

    - 一般组件：`components/`
    - 路由组件：`pages/`

3. 接收到的`props`不同

    - 一般组件：写组件标签时传递了什么，就能收到什么

    - 路由组件：接收到三个固定的属性

        ```js
        history:
        	go: ƒ go(n)
        	goBack: ƒ goBack()
        	goForward: ƒ goForward()
        	push: ƒ push(path, state)
        	replace: ƒ replace(path, state)
        location:
        	pathname: "/about"
        	search: ""
        	state: undefined
        match:
        	params: {}
        	path: "/about"
        	url: "/about"
        ```

# 3. `NavLink`的使用

`NavLink`可以实现路由链接的高亮，通过`activeClassName`指定样式名。

```javascript
<NavLink activeClassName="demo" to="/home">Home</NavLink>
<NavLink activeClassName="demo" to="/about">About</NavLink>
```

# 4. 二次封装`NavLink`

```javascript
export default class MyNavLink extends Component {
    render() {
        return <NavLink activeClassName="active" {...this.props} />;
    }
}
```

```javascript
<MyNavLink to="/about">About</MyNavLink>
<MyNavLink to="/home">Home</MyNavLink>
```

# 5. `Switch`的使用

1. 通常情况下，`path`和`component`是一一对应的关系
2. `Switch`可以提高路由匹配效率（单一匹配），匹配成功后，就不继续往下遍历
3. 使用`<Switch></Switch>`标签将`<Route />`包裹起来

```javascript
<MyNavLink to="/about">About</MyNavLink>
<MyNavLink to="/home">Home</MyNavLink>

<Switch>
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
</Switch>
```

# 6. 解决样式丢失问题

1. `public/index.html`中引入样式时不写`./`，写`/`（常用）
2. `public/index.html`中 引入样式时不写`./`，写`%PUBLIC_URL%`（常用）
3. 使用`HashRouter`

# 7. 严格匹配与模糊匹配

1. 默认使用的是`模糊匹配`（`输入的路径`必须包含要`匹配的路径`，且**顺序要一致**）
2. 开启严格匹配：`<Route exact={true} path="/about" component={About}/>`
3. 严格匹配不要随便开启，需要再开。有些时候开启会导致无法继续匹配二级路由

# 8. `Redirect`的使用

一般写在所有**路由注册**的最下方，当所有路由都无法匹配时，跳转到`Redirect`指定的路由。

```javascript
<Switch>
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
    <Redirect to="/home" />
</Switch>
```

# 9. 嵌套路由

1. 在需要开启路由的组件的文件夹中，再创建组件

2. 在组件中开启子路由，注册子路由时要写上父路由的`path`值
3. 路由的匹配是按照注册路由的顺序进行的

![](https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210418094231.png)

```javascript
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <div>
                    <MyNavLink to="/home/news">News</MyNavLink>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        );
    }
}
```

# 10. 传递参数

详情请点击<a href="https://lzxjack.top/article/React-Router-props.html" target="_blank">`React-Router 传递参数`</a>。

# 11. `push`和`replace`的区别

- `push`模式

路由可以理解为`栈`的数据结构，`push`模式下，将每一次的地址推入`栈`中，会形成`history`，可返回到上一层。

- `replace`模式

`replace`模式下，将`栈顶`的地址替换为当前的地址，不会形成`history`，不可返回到上一层，因为上一层被替换了。

`React-Router`中默认是`push`模式，可在`路由链接`处开启`replace`模式：

```javascript
<Link replace={true} to="/home/message/detail/id/title">title</Link>
```

# 12. 编程式路由导航

借助`this.prosp.history`对象上的`API`对操作路由跳转、前进、后退。

```javascript
pushShow = (id, title) => {
    // push+params
    this.props.history.push(`/home/message/detail/${id}/${title}`);

    // push+search
    this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

    // push+state
    this.props.history.push(`/home/message/detail/`, { id, title });
};
replaceShow = (id, title) => {
    // replace+params
    this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // replace+search
    this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

    // replace+state
    this.props.history.replace(`/home/message/detail/`, { id, title });
};
...

<button onClick={() => {this.pushShow(msgObj.id, msgObj.title)}}>push模式</button>
<button onClick={() => {this.replaceShow(msgObj.id, msgObj.title);}}>replace模式</button>
```

# 13. `withRouter`的使用

- `withRouter`可以加工`一般组件`，让`一般组件`具备`路由组件`的`API`
- `withRouter`返回值是一个新组件

```javascript
import { withRouter } from 'react-router-dom';
...

class Header extends Component {
...
}

export default withRouter(Header);
```

# 14. `BrowserRouter`与`HashRouter`的区别

|                               |                `BrowserRouter`                 |               `HashRouter`                |
| :---------------------------: | :--------------------------------------------: | :---------------------------------------: |
|           底层原理            | 使用`H5`的`history API`，不兼容`IE9`及以下版本 |       使用`URL`的哈希值，兼容性更好       |
|          `path`形式           |   路径中没有`#`，`localhost:3000/demo/test`    | 路径包含`#`，`localhost:3000/#/demo/test` |
| 刷新后对路由`state`参数的影响 | 没有任何影响，因为`state`保存在`history`对象中 |    刷新后会导致路由`state`参数的丢失！    |

备注：`HashRouter`可以用于解决一些`路径错误`相关的问题。

***

欢迎在我的博客上访问：

https://lzxjack.top/article/React-router.html