import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from "./components/sidebar";
import  styles from'./App.module.css';
import './Global.css';


const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/107067495?v=4',
        name: 'Folha Bernardo',
        role: 'Web developer',     
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋',},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
        { type: 'link', content: '👉 jane.design/doctorcare' },      
      ],
      publishedAt: new Date('2023-09-27 17:00:00')
    },

    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat',     
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋',},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
        { type: 'link', content: '👉 jane.design/doctorcare' },      
      ],
      publishedAt: new Date('2023-09-26 20:00:00')
    },
];


export function App() {
  return (
    <div>      
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                  <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
              )
          })}
        </main>
      </div>
    </div>  
  )
}