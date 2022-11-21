This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Using Sass with Nextjs Project

Add sass using yarn

```bash
yarn add sass
```

- Create scss with Component.module.scss.

### Sample

```js
export default function Argentina() {
  return (
    <div>
        <h2  className={style.title}>
            Argentina Squad
        </h2>
        <ul>
            <li>
               Messi
               <button
                className={style.btn}
                style={{marginLeft: '1rem'}}
               >
                    <Link 
                        href={'/profiles/argentina/messi'}
                        style={{color: '#000'}}
                    >
                        View Profile
                    </Link>
                </button>
            </li>
            <li>
               DiMaria
               <button
                style={{marginLeft: '1rem'}}
               >
                    <Link
                        href={'/profiles/argentina/dimaria'}
                    >
                        View Profile
                    </Link>
                </button>
            </li>
        </ul>
    </div>
  )
}
```


**Argentina.module.scss**

```scss
h2.title {
    color: #329013;
}
button.btn {
    padding: .5rem;
    background: cadetblue;
}
```
