const getGitData = async () => {
    //const gitApiReq = `https://api.github.com/users/gamgee-em`;
    const gitStarredReposReq = 'https://api.github.com/users/gamgee-em/starred'

    //const gitApiData = await (await fetch(gitApiReq)).json();
    const gitStarredReposData = await (await fetch(gitStarredReposReq)).json();
    
    console.log(gitStarredReposData);
    //console.log(gitApiData);

    return gitStarredReposData;
    //return gitApiData;
  }

export default getGitData;