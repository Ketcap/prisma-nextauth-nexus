import { Table } from "evergreen-ui";
import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";

const octokit = new Octokit();

interface Props {
  response: RestEndpointMethodTypes["search"]["repos"]["response"];
}

export default function RepoList({ response }: Props) {


  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Provider</Table.TextHeaderCell>
        <Table.TextHeaderCell>User Name</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {(response?.data?.items ?? []).map((repo) => (
          <Table.Row key={repo.id}>
            <Table.TextCell>{repo.full_name}</Table.TextCell>
            <Table.TextCell>{repo.description}</Table.TextCell>
            <Table.TextCell>
              <a href={repo.url} target='_blank' rel="noreferrer">
              {repo.url}
              </a>
              </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const [repoName] = name;
  try {
    const response = await octokit.rest.search.repos({
      q: repoName,
    });
    return {
      props: {
        response
      },
      revalidate: 60, // In seconds
    }
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}