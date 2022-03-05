**Problem**

Build a search UI that displays a list of GitHub user&#39;s repositories ranked by stars. For

example, if you were to search for Facebook, you would see the react and

react-native repositories at the top of the list. You must use either the REST or

GraphQL GitHub API. Please do not use a library for querying

**Goals**

- Create a search UI with a minimalistic approach to allow users to search by Github user&#39;s repositories sorted by most stars.
- Utilize Github&#39;s API via REST API (implement rate limiting on front-end to avoid hitting rate limits on Github API)
- Allow for UI to scale at different resolutions (mobile, tablet, laptop, monitor)
- Implement unit and integration tests for components
- Implement end-to-end testing to ensure application interacts properly with Github API

**Non-Goals**

- Web application will not utilize a traditional server, and will directly call Github API via client (assuming that we are only using one endpoint. Best practice is to still have a server i.e. Node, Golang that makes third-party calls in order to keep the server as the source of truth, and keeping the front-end as &quot;dumb&quot; as possible).

**Nice-to-haves:**

- Ability to change sort filtering by **best match, stars, forks** , **updated** , or help-wanted-issues
- Ability to change sorting order by **desc** , **asc**
- Implement virtual scrolling to optimize performance of loading large lists in client
- Ability to search repositories, organizations, users (allow for search flexibility)
- Refactor useDebounce hook to be more generic so that it can be used for any type of function that requires debounce

**Technologies:**

- Front-end: React w/ Typescript
- Styling framework: React Bootstrap
- Linter: ESLint w/ Typescript
- E2E framework: Cypress

**Core Dependencies:**

- React-select - Dependency that supports async searching, and autocomplete functionalities
- React-bootstrap - Utilizing bootstrap's FE framework to allow for quicker turnaround time with establishing a layout given time constraints

**Github API Endpoints:**

**Search User and list repositories:**

[**https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user**](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)

**Search Repositories and list by user:**

[**https://api.github.com/search/repositories?q=user%3Afacebook&amp;sort=stars&amp;order=desc**](https://api.github.com/search/repositories?q=user%3Afacebook&sort=stars&order=desc)

**Implementation:**

**Components:**

- App - Houses components
- SearchBar - houses the search bar
- List - houses the list that will display the user search results

**Considerations:**

1. useContext vs useState ?
1. Unnecessary to use useContext in this case as we are not building a big application that will require global usage of any variables. At most, App will house both SearchBar and List
1. For optimization purposes, assuming this application will be scaled, useContext will house the search results in case it&#39;ll be used globally so we can avoid prop drilling
