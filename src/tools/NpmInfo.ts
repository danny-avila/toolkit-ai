import { Tool } from 'langchain/agents';
import queryRegistry from 'query-registry';

const { getPackument } = queryRegistry;

class NpmInfo extends Tool {
  override name = 'npm-info';

  override description =
    'Query NPM to fetch the README file of a particular package by name. Use this to discover implementation and usage details for a given package.';

  // eslint-disable-next-line no-underscore-dangle, class-methods-use-this
  protected override async _call(packageName: string): Promise<string> {
    const results = await getPackument({
      name: packageName,
    });
    return results.readme || 'No details available';
  }
}

export default NpmInfo;
