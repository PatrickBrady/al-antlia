<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/MenuDataResult">
        <ul id="{Info/ControlId}">
            <xsl:attribute name="class">
                <xsl:text>sf-menu</xsl:text>
            </xsl:attribute>
            <xsl:apply-templates select="Item/Item"/>
        </ul>
    </xsl:template>

    <xsl:template match="Item">
        <!-- Find items with a valid ItemId (items where ItemId == 0 are the "Add", "Edit Menu" links and are useless) -->
        <xsl:variable name="HasDropdown" select="count(Menu/Item[ItemId &gt; 0]) &gt; 0"/>
        <xsl:variable name="CssClass">
            <!-- Magical Ektron "logic" to determine if this link is active (user is on the page that this item links to) -->
            <xsl:if test="count(.//ItemSelected[text() = 'true']) &gt; 0 or count(.//MenuSelected[text() = 'true']) &gt; 0 or count(.//ChildMenuSelected[text() = 'true']) &gt; 0">
                active
            </xsl:if>
            <xsl:if test="$HasDropdown">parent</xsl:if>
        </xsl:variable>
        <xsl:variable name="Link" select="Menu/Link" />
        <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
        <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

        <xsl:if test="ItemId != '0'">
        <li>
            <xsl:if test="$CssClass != ''">
                <xsl:attribute name="class">
                    <xsl:value-of select="normalize-space($CssClass)"/>
                </xsl:attribute>
            </xsl:if>
            <a>
                <xsl:choose>
                    <xsl:when test="ItemType = 'Javascript'">
                        <xsl:attribute name="href">
                            <xsl:value-of select="concat('javascript:', normalize-space(ItemLink))"/>
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:when test="ItemLink != ''">
                        <xsl:attribute name="href">
                            <xsl:value-of select="normalize-space(ItemLink)"/>
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:when test="translate($Link, $uppercase, $lowercase) = '/homepage/'">
                        <xsl:attribute name="href">
                            <xsl:text>/</xsl:text>
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:when test="$Link != '' and translate($Link, $uppercase, $lowercase) !='/homepage/'">
                        <xsl:attribute name="href">
                            <xsl:choose>
                                <xsl:when test="contains(translate($Link, $uppercase, $lowercase), 'http://') or contains(translate($Link, $uppercase, $lowercase), 'https://')">
                                    <xsl:value-of select="normalize-space($Link)"/>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:value-of select="normalize-space(translate($Link, $uppercase, $lowercase))"/>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:attribute name="href">
                            <xsl:text>#</xsl:text>
                        </xsl:attribute>
                    </xsl:otherwise>
                </xsl:choose>
                <xsl:if test="ItemTarget and ItemTarget != '2'">
                    <!-- ItemTarget=2 is '_self' which is the default -->
                    <xsl:attribute name="target">
                        <xsl:choose>
                            <xsl:when test="ItemTarget = '1'">
                                <xsl:text>_blank</xsl:text>
                            </xsl:when>
                            <xsl:when test="ItemTarget = '3'">
                                <xsl:text>_parent</xsl:text>
                            </xsl:when>
                            <xsl:when test="ItemTarget = '4'">
                                <xsl:text>_top</xsl:text>
                            </xsl:when>
                        </xsl:choose>
                    </xsl:attribute>
                </xsl:if>
                <xsl:if test="$HasDropdown">
                    <!-- Add class or data attribute to <a> -->
                    <!-- <xsl:attribute name="class">dropdown-toggle</xsl:attribute> -->
                    <!-- <xsl:attribute name="data-toggle">dropdown</xsl:attribute> -->
                </xsl:if>
                <xsl:value-of select="normalize-space(ItemTitle)"/>
                <xsl:if test="$HasDropdown">
                    <!-- spacer for dropdown arrow -->
                    <!-- <i></i> -->
                </xsl:if>
            </a>
            <xsl:if test="$HasDropdown">
                <ul class="sub-menu">
                    <xsl:apply-templates select="Menu/Item"/>
                </ul>
            </xsl:if>
        </li>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>
