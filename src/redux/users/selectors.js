export const isLoadingSelector = state => state.users.isLoading;

export const isErrorSelector = state => state.users.error;

export const usersSelector = state => state.users.users;

export const usersPostsSelector = state => state.users.posts;

export const usersAlbumsSelector = state => state.users.albums;
