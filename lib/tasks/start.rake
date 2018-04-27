desc 'start development server'
task :start do
  exec 'foreman start -f Procfile.dev'
end
