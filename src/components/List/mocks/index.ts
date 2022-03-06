export const mockRepositorySuccess = {
    data: {
      items: [
        {
          name: 'Test',
          full_name: 'Full Test',
          stargazers_count: 1,
          language: 'JavaScript',
          html_url: 'https://test.com',
        },
        {
          name: 'Test 2',
          full_name: 'Full Test 2',
          stargazers_count: 2,
          language: 'TypeScript',
          html_url: 'https://test2.com',
          },
      ],
    },
    error: null,
  };

  export const mockEmptySuccess = {
      data: {
          items: [],
      },
  };
