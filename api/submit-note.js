const { Octokit } = require('@octokit/rest');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { title, content, folder = '' } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const path = `src/site/notes/${folder}/${title}.md`;

  try {
    const fileContent = Buffer.from(content).toString('base64');

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Add/Update note: ${title}`,
      content: fileContent,
      branch: 'main', // or your default branch
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
