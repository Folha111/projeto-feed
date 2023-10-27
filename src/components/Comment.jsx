import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        }); 
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/107067495?v=4" />

            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    
                    <header>
                        
                        <div className={styles.authorAndTime}>
                            <strong>Folha Bernardo</strong>
                            <time title='19 de Setembro às 20:50' dateTime="2023-09-19 20:50:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}