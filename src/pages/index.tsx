import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

interface IndexPageProps {
    hello: 'string'
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
    return {
        props: {
            hello: 'string',
        },
    }
}

const IndexPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
    return <div></div>
}

export default IndexPage
