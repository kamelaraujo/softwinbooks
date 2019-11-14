var urlUsers = 'https://jsonplaceholder.typicode.com/users';
var urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const app= new Vue({
	el: '#app',
	created() {
		this.getUsers();
		this.getPosts();
	},
	data: {
		Autores: [],
		Posts: []
	},
	methods: {
		getUsers() {
			this.$http.get(urlUsers).then(function(responseAutores){
				this.Autores = responseAutores.body;
			})
		},
		getPosts() {
			this.$http.get(urlPosts).then(function(responsePosts){
				this.Posts = responsePosts.body;
			})
		}
	}
})