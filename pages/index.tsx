import { Table } from "evergreen-ui";
import { GetServerSidePropsContext } from "next"
import { Session } from "next-auth"
import { ClientSafeProvider, getProviders, getSession, providers } from "next-auth/client"

interface Props {
  session?: Session;
  providers?: Record<string, ClientSafeProvider>;
}


export default function Home({ session, providers }: Props) {

  if (!session) return null;

  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Provider</Table.TextHeaderCell>
        <Table.TextHeaderCell>User Name</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {Object.entries(providers).map(([key,{id,name}]) => (
          <Table.Row key={id}>
            <Table.TextCell>{name}</Table.TextCell>
            <Table.TextCell>{session.user?.name}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    }
  }
  const providers = await getProviders();
  return {
    props: { session, providers }
  }
}