import React from 'react'

function Presentation() {
    return (
        <div>
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4 text-purple txt-anton ">Who are we ?</h2>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0 txt-anton ">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <div class="px-5 px-sm-0"><img class="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
