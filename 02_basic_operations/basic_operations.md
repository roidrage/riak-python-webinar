!SLIDE small

## Basic Operations

    @@@ python
    import riak

    client = riak.RiakClient()

!SLIDE small

## Different Host and Port

    @@@ python
    client = riak.RiakClient(host="192.168.2.1",
                              port=8080)

!SLIDE smaller

## Different Transports

    @@@ python
    from riak.transports.pbc import RiakPbcTransport

    client = riak.RiakClient(transport_class=RiakPbcTransport,
                              port=8087)

!SLIDE smaller

## Access Buckets

    @@@ python
    bucket = client.bucket("programming-languages")

    bucket.get_properties()

    bucket.set_property("allow_mult", True)

!SLIDE smaller

## Objects

    @@@ python
    data = {"type": "scripting", "flavour": "object-oriented"}
    python = bucket.new("python", data)
    python.store(w=3)

!SLIDE

### Automatically chooses `application/json`

!SLIDE smaller

## Binary data

    @@@ python
    data = open("hulk.jpg").read()
    hulk = bucket.new_binary("hulk", data)
    hulk.store()

!SLIDE smaller

## Directly from file

    @@@ python
    hulk = bucket.new_binary_from_file("hulk", "hulk.jpg")
    hulk.store()

!SLIDE smaller

## Guesses the content type!

    @@@ python
    print hulk.get_content_type()
    
    # "image/jpg"

