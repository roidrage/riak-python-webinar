!SLIDE

# Basic Operations #

    @@@ python
    import riak

    client = riak.RiakClient()

!SLIDE

# Different Host and Port #

    @@@ python
    client = riak.RiakClient(host="192.168.2.1", port=8080)

!SLIDE small

# Different Transports #

    @@@ python
    from riak.transports.pbc import RiakPbcTransport

    client = riak.RiakClient(transport_class=RiakPbcTransport,
                             port=8087)

!SLIDE small

# Buckets #

    @@@ python
    bucket = client.bucket("programming-languages")

    bucket.get_properties()

    bucket.set_property({"allow_mult": True})

!SLIDE small

# Objects #

    @@@ python
    data = {"type": "scripting", "flavour": "object-oriented"}
    python = bucket.new("python", data)

!SLIDE

* Automatically chooses `application/json`

!SLIDE small

# Binary data #

    @@@ python
    data = open("hulk.jpg").read()
    hulk = bucket.new_binary("hulk", data, content_type="application/octet-stream")
    hulk.store()

!SLIDE small

# Directly from file #

    @@@ python
    data = open("hulk.jpg").read()
    hulk = bucket.new_binary_from_file("hulk", "hulk.jpg")
    hulk.store()

!SLIDE small

# Guesses the content type! #

    hulk.get_content_type() # "image/jpg"


