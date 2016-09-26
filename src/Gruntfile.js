"use strict";

module.exports = function(grunt) {

	// Carrega todas as tarefas
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Meta
		pkg: grunt.file.readJSON("package.json"),

		// Banner
		banner:
		"/** \n" +
		"* Theme Name: <%= pkg.title %> \n" +
		"* Theme URI: <%= pkg.homepage %> \n" +
		"* Description: <%= pkg.description %> \n" +
		"* Author: <%= pkg.author.name %> \n" +
		"* Author URI: <%= pkg.author.url %> \n" +
		"* Version: 1.0 \n" +
		"**/" +
		"\n",

		// Compila os arquivos para CSS
		compass: {
			dist: {
				options: {
					imagesDir: '../assets/images',
					javascriptsDir: '../assets/js',
					fontsDir: '../assets/fonts',
					sassDir: '../assets/scss',
					cssDir: '../build/css',
					outputStyle: 'compressed',
					force: true
				}
			}
		},

		// Concatena e minifica os Scripts
		uglify: {
			options: {
				mangle: false,
				banner: '<%= banner %>'
			},

			dist: {
				files: {
					'../build/js/main.min.js': [ '../assets/js/main.js'],
					'../build/js/jquery.min.js': ['../assets/js/jquery.min.js' ],
					'../build/js/scripts.min.js': [ '../assets/js/vendor/*.js']
				}
			}
		},

		// Otimização de imagens
		img: {
			task1: {
				src: '../assets/images/',
				dest: '../build/images/'
			}
		},

		// Copia arquivos para build
		copy: {
			fonts: {
				files: [ {
					expand: true,
					cwd: '../assets/fonts/',
					src: [ '**/*' ],
					dest: '../build/fonts/'
				} ]
			},

			js: {
				files: [ {
					expand: true,
					cwd: '../assets/js/vendor',
					src: [ '**/*' ],
					dest: '../build/js/vendor'
				} ]
			},

			css: {
				files: [ {
					src: '../build/css/style.css',
					dest: '../build/css/style.min.css'
				} ]
			}
		},

		// Observa as mudanças nos arquivos
		watch: {
			css: {
				files: ['../assets/scss/**/*'],
				tasks: ['compass', 'copy:css']
			},

			js: {
				files: ['../assets/js/**/*'],
				tasks: ['uglify', 'copy:js']
			},

			images: {
				files: ['../assets/images/**/*'],
				tasks: ['img']
			},

			fonts: {
				files: ['../assets/fonts/**/*'],
				tasks: ['copy:fonts']
			}
		},

		// LiveReload
		browserSync: {
			files: {
				// Aplicando o recurso de LiveReload nos seguintes arquivos
				src : [
					'../assets/scss/*.scss',
					'../**/*.php',
					'../**/*.html'
				],
			},

			options: {

				// Definindo um IP manualmente | ipconfig (cmd)
				host : "10.0.0.28",

				// Atribuíndo um diretório base
				proxy: "localhost/starter-php",

				// Integrando com a tarefa "watch"
				watchTask: true,

				// Sincronizando os eventos entre os dispositivos
				ghostMode: {
					scroll: true,
					links: true,
					forms: true
				}
			},
		}

    });

	// Tarefa Padrão
	grunt.registerTask( 'init', [ 'compass','copy:js', 'copy:css', 'uglify', 'img', 'copy:fonts' ] );

	// Watch e LiveReload
	grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );

};
