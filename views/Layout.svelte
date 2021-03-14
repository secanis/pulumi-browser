<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style global>
            @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css';
        </style>
        %head%
    </head>
    <body>
        <nav
            class="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <a class="navbar-item title is-5 m-0" href="/">Pulumi Browser</a
                >
                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">Overview</a>

                    <div class="navbar-end" />
                </div>
            </div>
        </nav>
        <slot />
    </body>
</html>
