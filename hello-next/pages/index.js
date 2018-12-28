import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (  
  <Layout>
    <h1>My Home Page</h1>
    <ul>
      <PostLink title="My Title1"/>
      <PostLink title="My Title2"/>
      <PostLink title="My Title3"/>
    </ul>
  </Layout>
)
