/* eslint-disable */
// 这里关掉 eslint 只是为了方便的粘贴 json ，mock 响应的 json 从哪来？当然是从文档来
export function registerAuthMock (mock) {
  mock
    .onPost('auth/signup').reply(200, {
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbGlua3BhcGVyLnRlc3QvYXYxL2F1dGgvc2lnbmluIiwiaWF0IjoxNTIwMjUxMTEwLCJleHAiOjE1MjAzMzc1MTAsIm5iZiI6MTUyMDI1MTExMCwianRpIjoiT2hzZlp3R2FoMXVxVE1KYSIsInN1YiI6MSwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.Bof0mYqsUar83Oa8GJ-hmkV1c7mDcxyzPvFfQOC9m6E",
      "token_type": "bearer",
      "expires_in": 86400
    })
    .onPost('auth/signin').reply(200, {
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbGlua3BhcGVyLnRlc3QvYXYxL2F1dGgvc2lnbmluIiwiaWF0IjoxNTIwMjUxMTEwLCJleHAiOjE1MjAzMzc1MTAsIm5iZiI6MTUyMDI1MTExMCwianRpIjoiT2hzZlp3R2FoMXVxVE1KYSIsInN1YiI6MSwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.Bof0mYqsUar83Oa8GJ-hmkV1c7mDcxyzPvFfQOC9m6E",
      "token_type": "bearer",
      "expires_in": 86400
    })
    .onPost('auth/logout').reply(200)
    .onPost('auth/refresh').reply(200, {
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbGlua3BhcGVyLnRlc3QvYXYxL2F1dGgvc2lnbmluIiwiaWF0IjoxNTIwMjUxMTEwLCJleHAiOjE1MjAzMzc1MTAsIm5iZiI6MTUyMDI1MTExMCwianRpIjoiT2hzZlp3R2FoMXVxVE1KYSIsInN1YiI6MSwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.Bof0mYqsUar83Oa8GJ-hmkV1c7mDcxyzPvFfQOC9m6E",
      "token_type": "bearer",
      "expires_in": 86400
    })
    .onGet('auth/me').reply(200, {
      "id": 1,
      "name": "mock-user",
      "email": "mock-user@mock.com"
    })
}
