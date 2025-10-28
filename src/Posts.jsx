import './Post.css'
export default function Post({sing}) {

    const {id,userId,title,body}=sing
  return (
    <div className='post'>
        <h1>Id : {id}</h1>
      <h2> userId : {userId}</h2>
      <h3>title : {title}</h3>
      <p>body : {body}</p>
    </div>
  );
}
