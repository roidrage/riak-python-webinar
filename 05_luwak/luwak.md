!SLIDE bullets incremental new-feature

# Luwak #

* Large File Storage
* Chunked Across Cluster
* Think: File Uploads

!SLIDE smaller

    @@@ python
    client.store_file('hulk.jpg',
                        os.read('hulk.jpg'))

    client.get_file('hulk.jpg')

    client.delete_file('hulk.jpg')
