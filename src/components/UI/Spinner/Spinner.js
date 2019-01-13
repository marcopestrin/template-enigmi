import React        from 'react';

const Spinner = (props) => (
    <div class="d-flex justify-content-center text-primary">
        <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
);

export default Spinner;